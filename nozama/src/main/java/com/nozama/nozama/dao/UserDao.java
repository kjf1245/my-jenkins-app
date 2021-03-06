package com.nozama.nozama.dao;

import com.nozama.nozama.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
    public User findByEmail(String email);
    public User save(User user);

}
