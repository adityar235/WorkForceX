import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { fetchEmployeeById } from '../services/employeeService'

function DetailRow({ label, value }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      gap: 12,
      padding: '14px 0',
      borderBottom: '1px solid var(--border)'
    }}>
      <span style={{ color: 'var(--muted)', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </span>
      <span style={{ fontWeight: 500, fontSize: 15 }}>{value ?? '—'}</span>
    </div>
  )
}

export default function EmployeeDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [emp, setEmp] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchEmployeeById(id)
      .then(setEmp)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Header />

      <main style={{ maxWidth: 720, margin: '0 auto', padding: '32px 20px' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '8px 18px',
            cursor: 'pointer',
            fontSize: 14,
            fontFamily: 'DM Sans, sans-serif',
            color: 'var(--text)',
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 6
          }}
        >
          ← Back
        </button>

        {loading && <p style={{ color: 'var(--muted)' }}>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {emp && (
          <div style={{
            background: '#fff',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '32px',
            boxShadow: 'var(--shadow)'
          }}>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 24, marginBottom: 4 }}>{emp.name}</h2>
              <span style={{
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                fontSize: 13,
                fontWeight: 600,
                padding: '3px 12px',
                borderRadius: 20
              }}>{emp.department}</span>
            </div>

            <DetailRow label="Employee ID" value={`#${emp.id}`} />
            <DetailRow label="Gender" value={emp.gender} />
            <DetailRow label="Email" value={emp.email} />
            <DetailRow label="Phone" value={emp.phone} />
            <DetailRow label="Date of Joining" value={
              emp.dateOfJoining
                ? new Date(emp.dateOfJoining).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
                : null
            } />
            <DetailRow label="Salary" value={
              emp.salary
                ? `₹${Number(emp.salary).toLocaleString('en-IN')}`
                : null
            } />
          </div>
        )}
      </main>
    </div>
  )
}