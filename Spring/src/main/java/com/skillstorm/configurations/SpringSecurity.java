package com.skillstorm.configurations;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SpringSecurity extends WebSecurityConfigurerAdapter {

	@Autowired
	UserDetailsService userDetailsService;

	@Autowired
	private DataSource datasource;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
//		auth.jdbcAuthentication().dataSource(datasource);
		auth.jdbcAuthentication().dataSource(datasource)
		.authoritiesByUsernameQuery("select username, password, enabled from users where username =?")
		.authoritiesByUsernameQuery("select username, authority from authorities where username =?");
		
	}

	@Bean
	public PasswordEncoder getPasswordEncoder() {
		return NoOpPasswordEncoder.getInstance();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.csrf().disable()
		.authorizeRequests()
//		.antMatchers("/**").hasRole("ADMIN")
		.antMatchers("/plan").permitAll()
		.antMatchers("/status").permitAll()
		.antMatchers("/interval").permitAll()
//		.antMatchers("/profiles").hasAnyRole("ADMIN")
//		.antMatchers("/profiles/id").hasAnyRole("USER", "ADMIN")
		.antMatchers("/**").hasAnyRole("ADMIN")
//		.antMatchers("/user").hasAnyRole("USER", "ADMIN")
//		.antMatchers("/").hasAnyRole("USER", "ADMIN")
		
//		.antMatchers("/").permitAll()
		.and()
//		.httpBasic();
		.formLogin();
//		.loginPage("/login");
	}

}
