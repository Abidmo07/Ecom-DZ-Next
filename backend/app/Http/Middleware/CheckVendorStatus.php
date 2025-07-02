<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckVendorStatus
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user=auth()->user();
        if($user && $user->hasRole('vendor') && $user->status=='suspended' ){
            auth()->logout() ;
            return redirect()->route('filament.vendor.auth.login');
            

        }
        return $next($request);
    }
}
