package com.aditya.backend.repo;

import com.aditya.backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query("SELECT e FROM Employee e WHERE " +
            "(:name IS NULL OR LOWER(e.name) LIKE LOWER(CONCAT('%', :name, '%'))) AND " +
            "(:department IS NULL OR e.department = :department) AND " +
            "(:gender IS NULL OR e.gender = :gender)")
    List<Employee> findByFilters(
            @Param("name") String name,
            @Param("department") String department,
            @Param("gender") String gender
    );
}
