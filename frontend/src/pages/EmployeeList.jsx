import { useEffect, useState } from 'react'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import EmployeeCard from '../components/EmployeeCard'
import { fetchAllEmployees, fetchFilteredEmployees } from '../services/employeeService'

export default function EmployeeList() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchAllEmployees()
      .then(setEmployees)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const handleApply = async ({ name, department, gender }) => {
    setLoading(true)
    try {
      const data = await fetchFilteredEmployees(name, department, gender)
      setEmployees(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Header />

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '32px 20px' }}>
        <h2 style={{ marginBottom: 20, fontSize: 22 }}>Employees</h2>

        <SearchFilter onApply={handleApply} />

        <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 1fr 1fr',
            gap: 16,
            padding: '8px 24px',
            color: 'var(--muted)',
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            <span>ID</span>
            <span>Name</span>
            <span>Department</span>
            <span>Date of Joining</span>
          </div>

          {loading && <p style={{ color: 'var(--muted)', padding: '16px 0' }}>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!loading && !error && employees.length === 0 && (
            <p style={{ color: 'var(--muted)', padding: '16px 0' }}>No employees found.</p>
          )}
          {!loading && employees.map(emp => (
            <EmployeeCard key={emp.id} employee={emp} />
          ))}
        </div>
      </main>
    </div>
  )
}