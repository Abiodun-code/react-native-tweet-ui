import * as React from "react"
import {SafeAreaView, Text} from "react-native"
import { useRoute, useNavigation } from "@react-navigation/native";
import TweetContent from "../../components/TweetContent"

const TweetDetailsScreen = ()=>{
  const route = useRoute();
  const navigation = useNavigation()

  const {params}=  route

  React.useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle: params.tweet.author.name,
    })
  },[])

  return(
    <SafeAreaView style={{flex:1}}>
      <TweetContent tweet={params.tweet}/>
    </SafeAreaView>
  )
}

export default TweetDetailsScreen