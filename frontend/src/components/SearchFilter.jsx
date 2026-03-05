import { useState } from 'react'

const DEPARTMENTS = ['', 'SDE-1', 'SDE-2', 'SDE-3', 'Sales', 'Team Lead', 'Intern',]
const GENDERS = ['', 'Male', 'Female', 'Other']

export default function SearchFilter({ onApply }) {
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [gender, setGender] = useState('')

  const handleApply = () => {
    onApply({ name, department, gender })
  }

  const inputStyle = {
    padding: '9px 14px',
    border: '1px solid var(--border)',
    borderRadius: 8,
    fontSize: 14,
    color: 'var(--text)',
    background: '#fff',
    outline: 'none',
    fontFamily: 'DM Sans, sans-serif',
    minWidth: 160
  }

  return (
    <div style={{
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '20px 24px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      alignItems: 'flex-end',
      boxShadow: 'var(--shadow)'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Search by Name
        </label>
        <input
          style={{ ...inputStyle, minWidth: 220 }}
          placeholder="e.g. John Doe"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Department
        </label>
        <select style={inputStyle} value={department} onChange={e => setDepartment(e.target.value)}>
          {DEPARTMENTS.map(d => <option key={d} value={d}>{d || 'All Departments'}</option>)}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Gender
        </label>
        <select style={inputStyle} value={gender} onChange={e => setGender(e.target.value)}>
          {GENDERS.map(g => <option key={g} value={g}>{g || 'All Genders'}</option>)}
        </select>
      </div>

      <button
        onClick={handleApply}
        style={{
          padding: '9px 24px',
          background: 'var(--primary)',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
          fontFamily: 'DM Sans, sans-serif',
          transition: 'opacity 0.15s'
        }}
        onMouseOver={e => e.target.style.opacity = '0.88'}
        onMouseOut={e => e.target.style.opacity = '1'}
      >
        Apply Filter
      </button>
    </div>
  )
}