<?php

namespace App\Repositories;

use App\Interfaces\MessageRepositoryInterface;
use App\Models\Message;

class MessageRepository implements MessageRepositoryInterface
{
	/**
	 * get all messages
	 * 
	 * @return Illuminate\Database\Eloquent\Collection
	 */
	public function getAll()
	{
		return Message::all();
	}

	/**
	 * store message
	 * 
	 * @param array $input
	 * @return Illuminate\Database\Eloquent\Model
	 */
	public function create(array $input)
	{
		return Message::create([
			'name' => $input['name'],
			'message' => $input['message']
		]);
	}

	/**
	 * delete message
	 * 
	 * @param int $id
	 * @return boolean
	 */
	public function delete(int $id)
	{
        return Message::findOrFail($id)->delete();
	}
}