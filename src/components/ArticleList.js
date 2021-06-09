import React from "react"
import Article from "./Article"



function ArticleList({articles}) {

    let articleArr = articles.map(obj => {
         return <Article title={obj.title} date={obj.date} preview={obj.preview} key={obj.id}/>
    })

    return (
        <main>
            {articleArr}
        </main>
    )

}

export default ArticleList