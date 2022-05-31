import React from 'react'
import * as admin from 'firebase-admin'
import FirestoreDatasource from './firestoreDatasource'
import { ApolloServer } from 'apollo-server-micro'

admin.initializeApp({
  databaseURL: `https://${process.env.PROJECT_ID}.firebaseio.com`,
})

const dataSources = () => ({
  firestore: new FirestoreDatasource(admin.firestore()),
})

const apolloServer = new ApolloServer({ schema, dataSources })

class FireBaseTestButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    // firebase処理
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>firebase test</button>
      </div>
    )
  }
}

export default FireBaseTestButton
