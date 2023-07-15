'use client'

type Props = {
  checked: boolean
  onChange: (newValue: boolean) => void
  label: string
}

export const ToggleCheckbox = ({ checked, onChange, label }: Props) => (
  <div className="form-control">
    <label className="label cursor-pointer justify-start gap-2">
      <input
        type="checkbox"
        checked={checked}
        className="checkbox checkbox-sm"
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className="label-text">{label}</span>
    </label>
  </div>
)
