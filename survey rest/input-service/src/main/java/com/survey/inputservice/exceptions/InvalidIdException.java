package com.survey.inputservice.exceptions;

public class InvalidIdException extends RuntimeException {
	public InvalidIdException(int eId) {
		super("could not find " + eId);
	}

}
