//
//  LengthConverter.swift
//  Unit Converter
//
//  Created by Natan Facchin on 30/05/17.
//  Copyright © 2017 NFS Industries. All rights reserved.
//

import Foundation

class UnitConverter: ConverterModel {
    var toValue: Double?

    var fromValue: Double?

    var toUnit: String?

    var fromUnit: String?

    var availableUnits: String?
    var type: String

    
    required init(converterType: String) {
        type = converterType
    }
    
    func convert(fromUnit: String, toUnit: String, fromValue: Double, toValue: Double) -> String {
        return "TODO"
    }
    
}
