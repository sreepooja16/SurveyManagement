package com.survey.inputservice.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.survey.inputservice.entity.InputEntity;

@Repository

public interface InputDao extends JpaRepository<InputEntity, Integer> {

	
	long countByQuestion1(int qid);
	long countByQuestion2(int qid);
	long countByQuestion3(int qid);
	long countByQuestion4(int qid);
	long countByQuestion5(int qid);
	long countByQuestion6(int qid);
}
