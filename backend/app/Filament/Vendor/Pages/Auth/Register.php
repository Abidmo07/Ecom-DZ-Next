<?php

namespace App\Filament\Vendor\Pages\Auth;

use Filament\Pages\Auth\Register as BaseRegister;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Filament\Forms;

class Register extends BaseRegister
{
    protected function getFormSchema(): array
    {
        return [
            Forms\Components\TextInput::make('name')
                ->label('Full Name')
                ->required()
                ->maxLength(255),

            Forms\Components\TextInput::make('email')
                ->label('Email Address')
                ->email()
                ->required()
                ->maxLength(255),

            Forms\Components\TextInput::make('password')
                ->label('Password')
                ->password()
                ->required()
                ->minLength(8)
                ->same('passwordConfirmation'),

            Forms\Components\TextInput::make('passwordConfirmation')
                ->label('Confirm Password')
                ->password()
                ->required()
                ->minLength(8),
        ];
    }

    protected function handleRegistration(array $data): User
    {
        // Create the user with plain text password – Laravel will auto-hash it.
        $user = User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => $data['password'],
        ]);

        // Assign the 'vendor' role to the user after creation
        $user->assignRole('vendor');

        return $user;
    }
}