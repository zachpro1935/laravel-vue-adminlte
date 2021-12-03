<?php

namespace App\Http\Requests\Admin;

use App\Http\Requests\ApiFormRequest as FormRequest;

class RegisterUserRequest extends FormRequest
{
   public function authorize()
   {
    //    abort_if(Gate::denies('customer_create'), Response::HTTP_FORBIDDEN, __('panel.403'));
       return true;
   }

    public function rules()
    {
        $rules = [
            'name' => 'required|between:2,100',
            'email' => 'required|email|unique:users|max:50',
            'password' => 'required|confirmed|string|min:6'
        ];

        return $rules;
    }
}
