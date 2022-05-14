<?php

namespace App\Traits;

trait ScopeTrait
{
    /**
     * Apply limit and offset to query
     * 
     * @param Object $query
     * @return Object
     */
    public static function scopeLimitOffset($query, $limit, $offset)
    {
        return $query->when($limit, function($query) use ($limit) {
            return $query->limit($limit);
        })->when($offset, function($query) use ($offset) {
            return $query->offset($offset);
        });
    }
}