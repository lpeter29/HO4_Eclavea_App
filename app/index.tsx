import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../Styles/style";


const services = [
  { id: "1", name: "Wallet", icon: "wallet-outline", color: "#FF4B5C" },
  { id: "2", name: "Transfer", icon: "swap-horizontal", color: "#4B9EFF" },
  { id: "3", name: "Pay", icon: "cash-outline", color: "#FFB74D" },
  { id: "4", name: "Topup", icon: "add-circle-outline", color: "#4CAF50" },
];

const transactions = [
  { id: "1", name: "Dribble", desc: "Payment Received", amount: "$275", color: "#E91E63" },
  { id: "2", name: "Google Wallet", desc: "Payment via wallet can be done", amount: "$180", color: "#4CAF50" },
  { id: "3", name: "Uplabs", desc: "Payment Received", amount: "$137", color: "#1E88E5" },
];

const Dashboard = () => (
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <Image source={require("../assets/images/iconko.png")} style={styles.profileImage} />
      <Text style={styles.userName}>
        Hello {"\n"}
        <Text style={styles.boldText}>Peter Paul F. Eclavea</Text>
      </Text>
      <Ionicons name="search-outline" size={24} color="black" style={styles.searchIcon} />
    </View>

    {/* Balance Card */}
    <View style={styles.card}>
      <Text style={styles.cardText}>Current Balance</Text>
      <Text style={styles.balanceText}>USD 248.75</Text>
      <Text style={styles.cardNumber}>**** **** **** 1474</Text>
      <Text style={styles.expiry}>Ex. Date 10/28</Text>
    </View>

    {/* Services */}
    <View style={styles.services}>
      {services.map((service) => (
        <View key={service.id} style={[styles.serviceButton, { backgroundColor: service.color }]}>
          <Ionicons name={service.icon} size={28} color="white" />
          <Text style={styles.serviceText}>{service.name}</Text>
        </View>
      ))}
    </View>

    {/* Transactions */}
    <Text style={styles.sectionTitle}>Recent Transactions</Text>
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.transactionItem}>
          <View style={styles.transactionLeft}>
            <View style={[styles.iconContainer, { backgroundColor: item.color }]} />
            <View>
              <Text style={styles.transactionTitle}>{item.name}</Text>
              <Text style={styles.transactionDesc}>{item.desc}</Text>
            </View>
          </View>
          <Text style={[styles.amount, { color: item.color }]}>{item.amount}</Text>
        </View>
      )}
    />
  </View>
);

export default Dashboard;
