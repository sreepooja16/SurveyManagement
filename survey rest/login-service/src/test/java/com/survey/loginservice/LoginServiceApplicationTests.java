
package com.survey.loginservice;

import org.junit.jupiter.api.Test;

import org.junit.runner.RunWith;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.survey.loginservice.dao.AdminLoginDao;
import com.survey.loginservice.entity.AdminLoginEntity;
import com.survey.loginservice.pojo.AdminDataPojo;
import com.survey.loginservice.pojo.AdminLoginPojo;
import com.survey.loginservice.service.LoginServiceImpl;

@RunWith(SpringRunner.class)
@SpringBootTest
public class LoginServiceApplicationTests {
	@Autowired
	private LoginServiceImpl loginServiceImpl;
	
	@MockBean
	private AdminLoginDao adminLoginDao;
	
	
	@Test
	void testValidate() throws Exception{
		AdminLoginEntity adminLoginEntity = new AdminLoginEntity(0,"john","123");
		AdminLoginPojo adminLoginPojo = new AdminLoginPojo(0,"john","123");
		when(adminLoginDao.findByUsernameAndPassword("john","123")).thenReturn(adminLoginEntity);
		ResponseEntity<List<AdminDataPojo>> result = loginServiceImpl.checkAdmin(adminLoginPojo);
		assertEquals(200,result.getStatusCodeValue());
		assertEquals(true,result.hasBody());
		
		
		
		
	}

}
