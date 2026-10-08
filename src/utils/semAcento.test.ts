import { describe, it, expect } from 'vitest'
import { semAcento } from './semAcento'

describe('semAcento', () => {
  it('tira o acento e deixa minúsculo', () => {
    expect(semAcento('Café')).toBe('cafe')
  })

  it('não muda texto que já está sem acento e minúsculo', () => {
    expect(semAcento('cafe')).toBe('cafe')
  })

  it('tira o acento de texto todo em maiúscula', () => {
    expect(semAcento('CAFÉ')).toBe('cafe')
  })

  it('deixa minúsculo um texto sem acento', () => {
    expect(semAcento('CAFE')).toBe('cafe')
  })

  it('tira o acento de texto todo em minúscula', () => {
    expect(semAcento('café')).toBe('cafe')
  })
})
