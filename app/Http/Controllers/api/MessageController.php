<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Repositories\MessageRepository;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    private MessageRepository $messageRepository;

    /**
     * Constructor
     * 
     * @param object $messageRepository
     * @return void
     */
    public function __construct(MessageRepository $messageRepository)
    {
        $this->messageRepository = $messageRepository;
    }

    /**
     * Messages index
     * 
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return $this->messageRepository->getAll();
    }

    /**
     * Store message
     * 
     * @return  Illuminate\Database\Eloquent\Model
     */
    public function store(Request $request)
    {
        $input = $request->only(['name', 'message']);
        return $this->messageRepository->create($input);
    }

    /**
     * Delete message
     * 
     * @return boolean
     */
    public function destroy($id)
    {
        return $this->messageRepository->delete($id);
    }
}
