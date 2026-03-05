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
        // Convert empty strings to null so JPQL :param IS NULL check works correctly
        String nameFinal = (name == null || name.isBlank()) ? null : name.trim();
        String deptFinal = (department == null || department.isBlank()) ? null : department.trim();
        String genFinal = (gender == null || gender.isBlank()) ? null : gender.trim();
        return employeeRepository.findByFilters(nameFinal, deptFinal, genFinal);
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
}