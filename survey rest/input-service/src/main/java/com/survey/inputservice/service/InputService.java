package com.survey.inputservice.service;


import com.survey.inputservice.pojo.InputPojo;
import com.survey.inputservice.pojo.StatPojo;

public interface InputService {

	InputPojo addInput(InputPojo inputPojo);

	StatPojo getStat(int id);

}
