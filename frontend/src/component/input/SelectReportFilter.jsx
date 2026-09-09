import { Autocomplete, TextField } from "@mui/material";

export default function SelectReportFilter({
    label,
    options,
    value,
    onChange,
    loading,
    sx,
}) {
    return (
        <Autocomplete
            options={options ?? []}
            value={value ?? null}
            loading={loading ?? false}
            onChange={(e, newValue) => {
                onChange(newValue ?? null);
            }}
            getOptionLabel={option => option?.label ?? ""}
            isOptionEqualToValue={(option, val) => option.value === val.value}
            renderInput={params => <TextField {...params} label={label} />}
            sx={sx}
        />
    );
}
