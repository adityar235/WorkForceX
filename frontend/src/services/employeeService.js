const BASE_URL = 'http://localhost:8080/api/employees'

export async function fetchAllEmployees() {
  const res = await fetch(BASE_URL)
  if (!res.ok) throw new Error('Failed to fetch employees')
  return res.json()
}

export async function fetchEmployeeById(id) {
  const res = await fetch(`${BASE_URL}/${id}`)
  if (!res.ok) throw new Error('Employee not found')
  return res.json()
}

export async function fetchFilteredEmployees(name, department, gender) {
  const params = new URLSearchParams()
  if (name) params.append('name', name)
  if (department) params.append('department', department)
  if (gender) params.append('gender', gender)

  const res = await fetch(`${BASE_URL}/filter?${params.toString()}`)
  if (!res.ok) throw new Error('Failed to filter employees')
  return res.json()
}