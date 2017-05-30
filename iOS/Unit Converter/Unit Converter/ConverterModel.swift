//
//  ConverterModel.swift
//  Unit Converter
//
//  Created by Natan Facchin on 28/05/17.
//  Copyright © 2017 NFS Industries. All rights reserved.
//

import Foundation

protocol ConverterModel {

    var type: String { get }
    var availableUnits: String? { get set }
    var fromUnit: String? { get set }
    var toUnit: String? { get set }
    var fromValue: Double? { get set }
    var toValue: Double? { get set }
    
    init(converterType: String);
    //func getAvailableUnits() -> [String];
    func convert(fromUnit: String, toUnit: String, fromValue: Double, toValue: Double) -> String;

}
