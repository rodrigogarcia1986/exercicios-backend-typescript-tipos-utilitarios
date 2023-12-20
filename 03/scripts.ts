type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

// const conexao = (dados: Conn): Readonly<{driver: string, url: string}> => {
//     const { username, password, host, port, dbname } = dados;
//     return {
//         driver: 'postgres',
//         url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
//     };
// }

type ConnObject = {
    driver: string,
    url: string
}

const conexao = (dados: Conn): Readonly<ConnObject> => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}

