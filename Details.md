# DESCRIPTIONS

## Patient
- The main user that will pay for the doctor services

## Doctor
- User that will make actions
## Record type
- General actions that is made for a doctor
Diagnostic Actions:
- Dental Examinations
- X-rays (Radiographs)
- Bite Evaluation
- Oral Cancer Screening
Preventative Actions:
- Teeth Cleaning (Prophylaxis)
- Fluoride Treatments
- Dental Sealants
- Patient Education
- Mouthguards
Restorative Actions: 
- Fillings
- Crowns (Caps)
- Bridges
- Root Canal Treatment (Endodontics)
- Extractions
- Dental Implants
- Dentures
- Gum Disease Treatment (Periodontics)
- Inlays and Onlays
Cosmetic Actions:
- Teeth Whitening
- Veneers
- Dental Bonding
- Orthodontic Treatments (Braces and Aligners)
- Gum Lifts/Reshaping (Gingivectomy)



## Record
- A particular instance of record type
- it belongs to a record type
- An action made by a dentist that has a cost
- It can be associate with more than one dentist
- it will be done to a patient
- Examples(Clean teeth, Fix molar tooth 2, etc)

## Record details 
- An action can be made in more than one details
- Example(Clean teeth first time, Clean teeth second time, this clean can be a treatment that can be done in more than one time)
- Example(Fix molar fisrt day, drill it to clean the tartar, another day it can be to cover this with the cement that is to fix the tooth )

## Appoitment
- A day and hour that is set to make an action(Record detail) and it is associated to a record.
- I tcan be created from a record instance that has the details of the user and the doctor associated to it.
