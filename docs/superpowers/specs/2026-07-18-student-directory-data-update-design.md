# Student Directory Data Update Design

## Goal

Update `src/pages/student_data.astro` with the valid students from the supplied form export who do not already appear in the directory.

## Scope

- Add the 21 unique, valid missing students submitted after the existing Bristy Akter record.
- Exclude the ambiguous Md Ashfak Hossain submission because its university and department fields both contain a person's name.
- Merge the two MD.AL-AMIN submissions into one student record.
- Keep students whose form response says they do not currently live in Vienna because the page describes students studying across Austria.
- Keep the existing directory layout, search, university filters, summary statistics, and WhatsApp-status badge.
- Do not add submitted image links or display phone numbers.

## Data Normalization

- Use consistent display capitalization for names and subjects while preserving each person's stated identity.
- Map spelling and casing variants to the directory's existing university labels, such as `TU Wien`, `University of Vienna`, `BOKU University`, `WU Vienna`, and `University of Graz`.
- Use clear department names instead of unexplained abbreviations where the submitted meaning is evident, such as `Computational Social Systems` for `CSS`.
- Preserve distinct institutions that do not yet exist in the directory, including Medical University of Vienna and Central European University (CEU).

## Implementation

Add the normalized records to the existing `students` array, grouped beside students from the same university. The current reduction and sorting logic will automatically update member, university, department, contact, filter, and section counts.

No component or styling changes are required.

## Verification

Before editing the production data, add an automated source-data check that fails while the missing names are absent. After adding the records:

- Confirm all 21 expected names occur exactly once.
- Confirm the excluded ambiguous submission is absent.
- Confirm the duplicate MD.AL-AMIN submissions produce one directory entry.
- Run the project checks and production build.
