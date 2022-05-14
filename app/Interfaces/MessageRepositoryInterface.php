<?php

namespace App\Interfaces;

interface MessageRepositoryInterface
{
    public function getAll(int $limit, int $offset);
    public function create(array $input);
    public function delete(int $id);
}