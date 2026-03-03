package com.aditya.backend.service;

import com.aditya.backend.model.Employee;
import com.aditya.backend.repo.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public List<Employee> filterEmployees(String name, String department, String gender) {
        String nameTrimmed = (name != null && name.isBlank()) ? null : name;
        String deptTrimmed = (department != null && department.isBlank()) ? null : department;
        String genTrimmed = (gender != null && gender.isBlank()) ? null : gender;
        return employeeRepository.findByFilters(nameTrimmed, deptTrimmed, genTrimmed);
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
}