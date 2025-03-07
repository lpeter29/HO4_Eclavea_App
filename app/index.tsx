import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../Styles/style";

const Dashboard = () => (
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <Image source={require("../assets/images/iconko.png")} style={styles.profileImage} />
      <Text style={styles.userName}>
        Hello {"\n"}
        <Text style={styles.boldText}>Peter Paul F. Eclavea</Text>
      </Text>
      <Image source={require("../assets/images/icons/search.png")} style={styles.searchIcon} />
    </View>

    {/* Balance Card */}
    <View style={styles.card}>
    <Image source={require("../assets/images/icons/card.png")} style={styles.cardIcon} />
      <Text style={styles.cardText}>Current Balance</Text>
      <Text style={styles.balanceText}>USD 248.75</Text>
      <Text style={styles.cardNumber}>**** **** **** 1474</Text>
      <Text style={styles.expiry}>Ex. Date 10/28</Text>
    </View>

    {/* Services Section */}
    <View style={styles.services}>
      <View style={styles.serviceButton}>
        <Image source={require("../assets/images/icons/wallet.png")} style={styles.serviceIcon} />
        <Text style={styles.serviceText}>Wallet</Text>
      </View>

      <View style={[styles.serviceButton, { backgroundColor: "#4B9EFF" }]}>
        <Image source={require("../assets/images/icons/transfer.png")} style={styles.serviceIcon} />
        <Text style={styles.serviceText}>Transfer</Text>
      </View>

      <View style={[styles.serviceButton, { backgroundColor: "#FFB74D" }]}>
        <Image source={require("../assets/images/icons/pay.png")} style={styles.serviceIcon} />
        <Text style={styles.serviceText}>Pay</Text>
      </View>

      <View style={[styles.serviceButton, { backgroundColor: "#4CAF50" }]}>
        <Image source={require("../assets/images/icons/topup.png")} style={styles.serviceIcon} />
        <Text style={styles.serviceText}>Topup</Text>
      </View>
    </View>

    {/* Recent Transactions */}
    <Text style={styles.sectionTitle}>Recent Transactions</Text>

    <View style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <Image source={require("../assets/images/icons/dribble.png")} style={[styles.dribbleicon]} />
        <View>
          <Text style={styles.transactionTitle}>Dribble</Text>
          <Text style={styles.transactionDesc}>Payment Received</Text>
        </View>
      </View>
      <Text style={[styles.amount, { color: "#E91E63" }]}>$275</Text>
    </View>

    <View style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <Image source={require("../assets/images/icons/google.png")} style={styles.googleicon} />
        <View>
          <Text style={styles.transactionTitle}>Google Wallet</Text>
          <Text style={styles.transactionDesc}>Payment via wallet can be done</Text>
        </View>
      </View>
      <Text style={[styles.amount, { color: "#4CAF50" }]}>$180</Text>
    </View>

    <View style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <Image source={require("../assets/images/icons/uplabs.jpeg")} style={styles.uplabsicon} />
        <View>
          <Text style={styles.transactionTitle}>Uplabs</Text>
          <Text style={styles.transactionDesc}>Payment Received</Text>
        </View>
      </View>
      <Text style={[styles.amount, { color: "#1E88E5" }]}>$137</Text>
    </View>
  </View>
);

export default Dashboard;
