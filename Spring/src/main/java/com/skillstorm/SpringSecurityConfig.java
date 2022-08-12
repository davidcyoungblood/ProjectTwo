package com.skillstorm;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;

@Configuration
//@EnableGlobalMethodSecurity  // role-based access control (RBAC) to methods.. not just URL
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired // Spring Data JPA should have a datasource already
	private DataSource datasource;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	protected void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.jdbcAuthentication().dataSource(datasource).passwordEncoder(passwordEncoder);
	}


	protected void configure(HttpSecurity http) throws Exception {

		http.csrf().disable();
		http.authorizeRequests().mvcMatchers("/**").permitAll();
//		http.authorizeRequests().mvcMatchers("/login-check");
//		http.authorizeRequests().mvcMatchers("/profiles/**").permitAll();
//
//		http.authorizeRequests().mvcMatchers("/billing/**");
//		http.authorizeRequests().mvcMatchers("/interval/**");
//		http.authorizeRequests().mvcMatchers("/plan/**");
//		http.authorizeRequests().mvcMatchers("/status/**");
//		http.authorizeRequests().mvcMatchers("/**").permitAll();
//		http.logout().deleteCookies("custom-cookie").invalidateHttpSession(false); // POST /logout
		// CSRF -
		// 1. login to Bank of America (session, cookie)
		// 2. hacker send you an email with link
		// 3. click link href=malicious JS   POST boa.com/api/transfer/your-acct/myacct/balance
		// 4. YOU initiated the request

		// generate a random csrf_token. Unsafe methods MUST contain the CSRF token or-else request is denied

	}

}
