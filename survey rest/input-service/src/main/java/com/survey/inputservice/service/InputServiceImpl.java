package com.survey.inputservice.service;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.survey.inputservice.dao.InputDao;
import com.survey.inputservice.entity.InputEntity;
import com.survey.inputservice.exceptions.InvalidIdException;
import com.survey.inputservice.pojo.InputPojo;
import com.survey.inputservice.pojo.StatPojo;

@Service
public class InputServiceImpl implements InputService {

	static Logger LOG = Logger.getLogger(InputServiceImpl.class.getClass());

	@Autowired
	InputDao inputDao;

	// posting the answers to the database by returning inputpojo
	@Override
	public InputPojo addInput(InputPojo inputPojo) {
		LOG.info("entered addInput()");
		// adding pojo elements to entities
		InputEntity inputEntity = new InputEntity(inputPojo.getInputid(), inputPojo.getUserid(),
				inputPojo.getQuestion1(), inputPojo.getQuestion2(), inputPojo.getQuestion3(), inputPojo.getQuestion4(),
				inputPojo.getQuestion5(), inputPojo.getQuestion6());

		inputDao.save(inputEntity);
		LOG.info("Exited addInput()");
		BasicConfigurator.resetConfiguration();

		return inputPojo;
	}

	@Override
	public StatPojo getStat(int id) {
		
		
		long totalcount=inputDao.count();
		  float count1=	0;
		  float count2=	0;
		  float count3=	0;
		  float stat1=0;
		  float stat2=0;
		  float stat3=0; 
		  
		switch (id) {
		  case 1:
		      count1=	inputDao.countByQuestion1(1);
			  count2=	inputDao.countByQuestion1(2);
			   count3=	inputDao.countByQuestion1(3);
			   stat1=count1*100/totalcount;
			   stat2=count2*100/totalcount;
			   stat3=count3*100/totalcount; 
			 StatPojo statPojo1=new StatPojo(stat1,stat2,stat3);
			  return statPojo1;  
		
		  case 2:
			  count1=	inputDao.countByQuestion2(1);
			  count2=	inputDao.countByQuestion2(2);
			   count3=	inputDao.countByQuestion2(3);
			   stat1=count1*100/totalcount;
			   stat2=count2*100/totalcount;
			   stat3=count3*100/totalcount;
			  StatPojo statPojo2=new StatPojo(stat1,stat2,stat3);
			  return statPojo2;  
		  case 3:
			  count1=	inputDao.countByQuestion3(1);
			  count2=	inputDao.countByQuestion3(2);
			   count3=	inputDao.countByQuestion3(3);
			   stat1=count1*100/totalcount;
			   stat2=count2*100/totalcount;
			   stat3=count3*100/totalcount;
			  StatPojo statPojo3=new StatPojo(stat1,stat2,stat3);
			  return statPojo3; 
		  case 4:
			  count1=	inputDao.countByQuestion4(1);
			  count2=	inputDao.countByQuestion4(2);
			   count3=	inputDao.countByQuestion4(3);
			   stat1=count1*100/totalcount;
			   stat2=count2*100/totalcount;
			   stat3=count3*100/totalcount;
			  StatPojo statPojo4=new StatPojo(stat1,stat2,stat3);
			  return statPojo4; 
		  case 5:
			  count1=	inputDao.countByQuestion5(1);
			  count2=	inputDao.countByQuestion5(2);
			   count3=	inputDao.countByQuestion5(3);
			   stat1=count1*100/totalcount;
			   stat2=count2*100/totalcount;
			   stat3=count3*100/totalcount;
			  StatPojo statPojo5=new StatPojo(stat1,stat2,stat3);
			  return statPojo5; 
		  case 6:
			  count1=	inputDao.countByQuestion6(1);
			  count2=	inputDao.countByQuestion6(2);
			   count3=	inputDao.countByQuestion6(3);
			   stat1=count1*100/totalcount;
			   stat2=count2*100/totalcount;
			   stat3=count3*100/totalcount;
			  StatPojo statPojo6=new StatPojo(stat1,stat2,stat3);
			  return statPojo6; 
			  
			  
		  default : throw new InvalidIdException(id);
		  
		}
	//long count=	inputDao.countByQuestion1(id);
	//System.out.println(count);
		//return null;
	
	}

}
