<?php

namespace App\Interfaces;

interface MessageRepositoryInterface
{
    public function getAll();
    public function create(array $input);
    public function delete(int $id);
}