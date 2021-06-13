{
    allPatients {
    patientId
    patientName
    prescriptions {
        auditNo
        auditStatus
        medicalInsuranceSettlement
        medicalInsuranceSettlementRatio
        specialAllowance
        specialAllowanceRatio
        products {
            id
            quantity
            suggestedPrice
            featureTags
            images
            specification
            importMark
        }
    }
}
}
