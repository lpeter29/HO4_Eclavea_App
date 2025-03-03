import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    flex: 1,
    fontSize: 18,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
  },
  searchIcon: {
    position: "absolute",
    right: 0,
  },
  card: {
    backgroundColor: "#3B82F6",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardText: {
    color: "white",
    fontSize: 16,
  },
  balanceText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  cardNumber: {
    color: "white",
    marginTop: 10,
  },
  expiry: {
    color: "white",
    textAlign: "right",
    marginTop: 10,
  },
  services: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  serviceButton: {
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceText: {
    color: "white",
    marginTop: 5,
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
  },
  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  transactionTitle: {
    fontWeight: "bold",
  },
  transactionDesc: {
    fontSize: 12,
    color: "#666",
  },
  amount: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
