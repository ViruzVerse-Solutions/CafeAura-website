import React from 'react';
import './Features.css';
import queueImg from '../assets/queue.png';
import digitalImg from '../assets/digital.png';
import dashboardImg from '../assets/dashboard.png';
import billingImg from '../assets/autobilling.png';

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-header">
        <h1>CafeAura Features</h1>
        <p>Skip the line, not the food. Order ahead with CafeAura and reclaim your study time!</p>
      </div>

      <section className="benefits-section product-benefits" aria-labelledby="product-benefits-heading">
        <h2 id="product-benefits-heading">Product Benefits</h2>
        <p className="text-center mb-2">CafeAura solves everyday campus dining problems by making ordering faster, smarter and contactless.</p>

        <div className="benefits-grid">
          <div className="benefit-card queue-card" role="article" aria-labelledby="b1">
            {/* Queue illustration (larger, no SVG icon) */}
            <img src={queueImg} className="benefit-illustration" alt="People waiting in queue at canteen" />
            <div className="benefit-meta">
              <h3 id="b1">Eliminates Queues</h3>
              <p>CafeAura automates ordering, removing the need to stand in line.</p>
            </div>
          </div>

          <div className="benefit-card" role="article" aria-labelledby="b2">
            <img src={digitalImg} className="benefit-illustration small-illustration" alt="Digital payments illustration" />
            <div className="benefit-meta">
              <h3 id="b2">Digital Payments</h3>
              <p>Secure UPI and card integration for faster transactions.</p>
            </div>
          </div>

          <div className="benefit-card" role="article" aria-labelledby="b3">
            <img src={dashboardImg} className="benefit-illustration small-illustration" alt="Dashboard analytics illustration" />
            <div className="benefit-meta">
              <h3 id="b3">Smart Dashboard</h3>
              <p>Real-time analytics for performance tracking and better decision making.</p>
            </div>
          </div>

          <div className="benefit-card" role="article" aria-labelledby="b4">
            <img src={billingImg} className="benefit-illustration small-illustration" alt="Automated billing illustration" />
            <div className="benefit-meta">
              <h3 id="b4">Auto Billing</h3>
              <p>No manual calculations—reports and invoices are generated instantly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Student Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Campus-wide Ordering</h3>
            <p>Order your favorite meals from anywhere on campus.</p>
          </div>
          <div className="benefit-card">
            <h3>Real-time Tracking</h3>
            <p>Track your order status in real-time and pick up using QR code.</p>
          </div>
          <div className="benefit-card">
            <h3>Digital Payments</h3>
            <p>Enjoy hassle-free digital payment options.</p>
          </div>
          <div className="benefit-card">
            <h3>Order History</h3>
            <p>Access your complete order history for better tracking.</p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Management Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Crowd Management</h3>
            <p>Reduce crowds with streamlined order processing.</p>
          </div>
          <div className="benefit-card">
            <h3>Automated Systems</h3>
            <p>Simplified billing and reporting through automation.</p>
          </div>
          <div className="benefit-card">
            <h3>Data Analytics</h3>
            <p>Gain valuable insights through sales analytics.</p>
          </div>
          <div className="benefit-card">
            <h3>Resource Optimization</h3>
            <p>Improve inventory management and staff efficiency.</p>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>CafeAura vs Traditional System</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>With CafeAura</th>
              <th>Without CafeAura</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ordering System</td>
              <td>Digital ordering from anywhere</td>
              <td>Manual queues</td>
            </tr>
            <tr>
              <td>Payment Method</td>
              <td>Multiple digital payment options</td>
              <td>Cash-only transactions</td>
            </tr>
            <tr>
              <td>Management Dashboard</td>
              <td>Comprehensive analytics dashboard</td>
              <td>No digital insights available</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Features;
