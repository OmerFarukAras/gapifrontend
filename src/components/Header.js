import {Grid, Col, Card, Text, Title} from "@tremor/react";
import LoginButton from "./LoginButton";
import {Link} from "react-router-dom";
import LogoutButton from "./LogoutButton";

// eslint-disable-next-line import/no-anonymous-default-export
export default function Header({user}) {
    return (
        <div>

            <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2">
                <Col numColSpan={1} numColSpanLg={2}>
                    <Card>
                        <Text>Gapi Post System. > <Link to="/">Click & Go home</Link></Text>
                        <Title>Auth & see endless content</Title>
                    </Card>
                </Col>
                <Card>
                    <Text>User </Text>
                    {
                        user ? (
                                <div>
                                    <Grid
                                        numColsLg={2}
                                    >
                                        <div><Title> {user.username} </Title></div>
                                        <div><LogoutButton></LogoutButton></div>
                                    </Grid>
                                </div>

                            ) :
                            <Title><Link to="/auth"><LoginButton></LoginButton></Link></Title>
                    }
                </Card>
            </Grid>
        </div>
    )

}

