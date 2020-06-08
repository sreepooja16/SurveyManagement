package com.survey.inputservice;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

 
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration


//Enabling spring security by extending WebSecurityConfigurerAdapter class
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors();
		http.csrf().disable();
		http.authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
        .anyRequest().authenticated().and().httpBasic();

	}
     //authentication is done using the following username and password
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication().withUser("abc").password("{noop}abc").roles("USER");
	}

}
