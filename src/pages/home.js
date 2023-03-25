import {useState} from "react";
import {Card, Grid, Tab, TabList} from "@tremor/react";

import CreateView from "./post/create";
import ReadView from "./post/read";
import UpdateView from "./post/update";
import DeleteView from "./post/delete";

export default function Home() {
    const [selectedViewHome, setSelectedViewHome] = useState("1");
    const [selectedViewPosts, setSelectedViewPosts] = useState("2");

    return (
        <div>
            <TabList
                defaultValue="1"
                onValueChange={(value) => setSelectedViewHome(value)}
                marginTop="mt-6"
            >
                <Tab value="1" text="Home"/>
                <Tab value="2" text="Posts"/>
            </TabList>

            {selectedViewHome === "1" ? (
                <>
                    <Grid
                        numColsLg={3}
                        className="mt-6 gap-6"
                    >
                        <Card>
                            {/* Placeholder to set height */}
                            <div className="h-28"/>
                        </Card>
                        <Card>
                            {/* Placeholder to set height */}
                            <div className="h-28"/>
                        </Card>
                        <Card>
                            {/* Placeholder to set height */}
                            <div className="h-28"/>
                        </Card>
                    </Grid>

                    <div className="mt-6">
                        <Card>
                            <div className="h-80"/>
                        </Card>
                    </div>
                </>
            ) : (
                <div>
                    <TabList
                        defaultValue="2"
                        onValueChange={(value) => setSelectedViewPosts(value)}
                        marginTop="mt-6"
                        color={"red"}
                    >
                        <Tab value="1" text="Create"/>
                        <Tab value="2" text="Read"/>
                        <Tab value="3" text="Update"/>
                        <Tab value="4" text="Delete"/>
                    </TabList>
                    {
                        {
                            '1': <CreateView/>,
                            '2': <ReadView/>,
                            '3': <UpdateView/>,
                            '4': <DeleteView/>
                        }[selectedViewPosts]
                    }
                </div>
            )}
        </div>
    );
}