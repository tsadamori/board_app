<?php

namespace App\Models;

use App\Scopes\OrderByAscScope;
use App\Traits\ScopeTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;
    use ScopeTrait;

    protected $fillable = ['name', 'message'];

    /**
     * Boot method
     * 
     * @return void
     */
    public static function boot()
    {
        parent::boot();

        static::addGlobalScope(new OrderByAscScope);
    }
}
