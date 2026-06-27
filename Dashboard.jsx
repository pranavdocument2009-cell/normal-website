import React, { useState } from 'react';
import './Dashboard.css'; // We will create this next

const Dashboard = () => {
  // Mock data based on your image description
  const recentBills = [
    { id: 'BILL-2024-000125', customer: 'Riya Sharma', amount: '₹56,800', date: '24/05/2024' },
    { id: 'BILL-2024-000124', customer: 'Amit Patel', amount: '₹32,450', date: '24/05/2024' },
    { id: 'BILL-2024-000123', customer: 'Sneha Reddy', amount: '₹1,05,000', date: '23/05/2024' },
    { id: 'BILL-2024-000122', customer: 'Vikram Singh', amount: '₹18,200', date: '23/05/2024' },
  ];

  const stats = [
    { title: "Today's Sales", value: "₹56,800", sub: "4 Bills", icon: "💰" },
    { title: "Total Customers", value: "125", sub: "Active", icon: "👥" },
    { title: "Total Products", value: "256", sub: "In Stock", icon: "💎" },
    { title: "Low Stock Items", value: "3", sub: "Need Reorder", icon: "⚠️" }
  ];

  return (
    <div className="dashboard-container">
      
      {/* Header */}
      <header className="dashboard-header">
        <div>
          <h1 className="system-title">Jewellery Billing System</h1>
          <p className="header-date">24 May 2024</p>
        </div>
        <div className="user-info">
          <span>Welcome, <strong>Admin</strong></span>
          <div className="admin-avatar">A</div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <p className="stat-title">{stat.title}</p>
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-sub">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content: Table & Quick Actions */}
      <div className="main-content">
        
        {/* Recent Bills Table */}
        <div className="recent-bills-section">
          <h3>Recent Bills</h3>
          <table className="bills-table">
            <thead>
              <tr>
                <th>Bill No</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentBills.map((bill, index) => (
                <tr key={index}>
                  <td className="bill-id">{bill.id}</td>
                  <td>{bill.customer}</td>
                  <td className="bill-amount">{bill.amount}</td>
                  <td>{bill.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions-section">
          <h3>Quick Actions</h3>
          <button className="action-btn primary-btn">+ New Bill</button>
          <button className="action-btn">Add Customer</button>
          <button className="action-btn">Manage Inventory</button>
          <button className="action-btn">Daily Reports</button>
          <button className="action-btn">Settings</button>
        </div>

      </div>

      {/* Bottom Barcode Section */}
      <div className="barcode-section">
        <div className="barcode-input-wrapper">
          <span className="barcode-icon">📱</span>
          <input 
            type="text" 
            placeholder="Scan or Enter Barcode..." 
            className="barcode-input"
          />
        </div>
        <div className="jewelry-icons">
          <span title="Ring">💍</span>
          <span title="Necklace">📿</span>
          <span title="Earrings">✨</span>
          <span title="Bangle">⭕</span>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
