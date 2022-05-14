<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class OrderByDescScope implements Scope
{
    /**
     * Order by desc scope
     * 
     * @param Illuminate\Database\Eloquent\Builder $builder
     * @param Illuminate\Database\Eloquent\Model $model
     * @return void
     */
    public function apply(Builder $builder, Model $model)
    {
        $builder->orderBy('created_at', 'desc');
    }
}