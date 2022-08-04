import React from "react";

import {
    BasicConfiguration,
    FormConfigurationProvider
} from "@nthity/form";

export default () => {
    console.log("BasicConfiguration", BasicConfiguration)
    return <FormConfigurationProvider {...BasicConfiguration}>
        <h1>Alhamdulillah</h1>
        {/* <BasicForm instance={{}}>
            <StringInput value="" onChange={(value: any) => console.log(value)} />
        </BasicForm> */}
    </FormConfigurationProvider>
}; 