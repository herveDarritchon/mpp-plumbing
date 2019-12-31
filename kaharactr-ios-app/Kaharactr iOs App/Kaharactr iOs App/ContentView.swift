//
//  ContentView.swift
//  Kaharactr iOs App
//
//  Created by Hervé Darritchon on 30/12/2019.
//  Copyright © 2019 Hervé Darritchon. All rights reserved.
//

import SwiftUI
import kaharactrLibrary

struct ContentView: View {
    var body: some View {
        Text(ShowMessageKt.sayHelloKotlinConf())
        .font(.system(size: 40))
        .multilineTextAlignment(.center)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
