<?php

namespace App\Filament\Vendor\Resources;

use App\Filament\Vendor\Resources\ProductResource\Pages;
use App\Filament\Vendor\Resources\ProductResource\RelationManagers;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
             ->schema([
                TextInput::make('name')->required(),
                Textarea::make('description')->required(),
                TextInput::make('price')->numeric()->required(),
                TextInput::make('stock')->numeric()->required(),
                FileUpload::make('image')->image()->directory('products_image')->required(),
                Select::make('category_id')->relationship('category','name')->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                   TextColumn::make('id')->sortable(),
                TextColumn::make('name')->sortable(),
                TextColumn::make('price')->sortable(),
                ImageColumn::make('image')->circular(),
                TextColumn::make('category.name')->label('Category'),
                TextColumn::make('vendor_id')->label('vendor ID'),
                TextColumn::make('vendor.name')->label('Vendor'),
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
    return parent::getEloquentQuery()->where('vendor_id', $user->id);
}


    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
