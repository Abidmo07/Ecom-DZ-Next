<?php

namespace App\Filament\Vendor\Resources;

use App\Filament\Vendor\Resources\OrderResource\Pages;
use App\Filament\Vendor\Resources\OrderResource\RelationManagers;
use App\Models\Order;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                 TextInput::make('custommer_name')->disabled(),
                TextInput::make('custommer_wilayas')->disabled(),
                TextInput::make('custommer_phone')->disabled(),
                TextInput::make('quantity')->disabled(),
                Textarea::make('custommer_address')->disabled(),
                TextInput::make('total_price')->disabled(),
                Select::make('status')->label('order status')->options([
                    'pending' => 'Pending',
                    'confirmed' => 'Confirmed',
                    'delivered' => 'Delivered',
                    'canceled' => 'Canceled'
                ])->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                 TextColumn::make('id')->sortable(),
                TextColumn::make('custommer_name')->searchable(),
                TextColumn::make('custommer_phone'),
                TextColumn::make('quantity'),
                TextColumn::make('total_price')->money('DZD'),
                TextColumn::make('status')
                ->label('Status')
                ->formatStateUsing(fn (string $state): string => ucfirst($state))
                ->color(fn (string $state): string => match ($state) {
                    'pending' => 'yellow',
                    'confirmed' => 'green',
                    'delivered' => 'blue',
                    'canceled' => 'red',
                    default => 'gray',
                }),
                TextColumn::make('orderItems.product.name')->label('Ordered Products')->listWithLineBreaks()->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

       public static function getEloquentQuery(): Builder
{
    $user=auth()->user();    
    return parent::getEloquentQuery()->whereHas('orderItems',function(Builder $query) use ($user){
        $query->where('vendor_id', $user->id);
    });
}

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }
}
