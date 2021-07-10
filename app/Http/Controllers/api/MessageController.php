<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function index()
    {
        $messages = Message::all();
        return response()->json($messages, 200);
    }

    public function store(Request $request)
    {
        $message = new Message;
        $message->name = $request->name;
        $message->message = $request->message;
        $message->save();
        return redirect('/');
    }

    public function destroy($id)
    {
        $message = Message::findOrFail($id);
        $message->delete();
        return redirect('/');
    }
}
