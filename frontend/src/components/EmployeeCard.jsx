import { useNavigate } from 'react-router-dom'

export default function EmployeeCard({ employee }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/employee/${employee.id}`)}
      style={{
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '16px 24px',
        display: 'grid',
        gridTemplateColumns: '80px 1fr 1fr 1fr',
        alignItems: 'center',
        gap: 16,
        cursor: 'pointer',
        transition: 'box-shadow 0.15s, border-color 0.15s',
        boxShadow: 'var(--shadow)'
      }}
      onMouseOver={e => {
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.12)'
        e.currentTarget.style.borderColor = 'var(--primary)'
      }}
      onMouseOut={e => {
        e.currentTarget.style.boxShadow = 'var(--shadow)'
        e.currentTarget.style.borderColor = 'var(--border)'
      }}
    >
      <span style={{
        background: 'var(--primary-light)',
        color: 'var(--primary)',
        borderRadius: 8,
        padding: '4px 10px',
        fontSize: 13,
        fontWeight: 600,
        textAlign: 'center'
      }}>#{employee.id}</span>

      <span style={{ fontWeight: 600, fontSize: 15 }}>{employee.name}</span>

      <span style={{
        background: '#f1f5f9',
        color: 'var(--muted)',
        borderRadius: 6,
        padding: '3px 10px',
        fontSize: 13,
        width: 'fit-content'
      }}>{employee.department}</span>

      <span style={{ color: 'var(--muted)', fontSize: 13 }}>
        Joined: {new Date(employee.dateOfJoining).toLocaleDateString('en-IN', {
          day: 'numeric', month: 'short', year: 'numeric'
        })}
      </span>
    </div>
  )
}