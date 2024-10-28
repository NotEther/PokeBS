import React, { useState } from 'react';

const TopBanner = () => {
    return (
        <div style={styles.banner}>
            <p style={styles.text}>Your Text Here</p>
        </div>
    );
};

const styles = {
    banner: {
        backgroundColor: "#ED0505",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        padding: "10px 0",
        textAlign: "center",
    },
    text: {
        color: "white",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
        fontSize: "18px",
    },
    leftColumn: {
        backgroundColor: "#383838",
        width: "100px",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 999,
    },
    rightColumn: {
        backgroundColor: "#383838",
        width: "100px",
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
    },
    content: {
        marginLeft: "100px",
        marginRight: "100px",
        paddingTop: "60px",
        paddingBottom: "20px",
        textAlign: "center",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        margin: "-20px 0",
    },
    button: {
        flex: 1,
        padding: "10px 20px",
        cursor: "pointer",
        border: "1px solid #ccc",
        backgroundColor: "#f0f0f0",
        fontSize: "16px",
    },
    activeButton: {
        backgroundColor: "#ddd",
        borderBottom: "2px solid #ED0505",
    },
    flexboxContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        padding: "10px",
        margin: "20px"
    },
    flexboxItem: {
        width: "300px",
        height: "300px",
        minWidth: "300px",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#fff",
        padding: "10px",
        boxSizing: "border-box",
    },
    
    image: {
        width: "200px",
        height: "160px",
        marginBottom: "5px",
    },
};

const BattleMenu = () => {
    const [activeList, setActiveList] = useState("list1");

    const list1 = [
        { text: "Random Battles", imgSrc: "icons/team.jpg" },
        { text: "Unranked Random Battles", imgSrc: "https://via.placeholder.com/80" },
        { text: "Item 3", imgSrc: "https://via.placeholder.com/80" },
        { text: "Item 4", imgSrc: "https://via.placeholder.com/80" },
        { text: "Item 5", imgSrc: "https://via.placeholder.com/80" },
        { text: "Item 6", imgSrc: "https://via.placeholder.com/80" },
        { text: "Item 7", imgSrc: "https://via.placeholder.com/80" },
    ];

    const list2 = [
        { text: "Item A", imgSrc: "https://via.placeholder.com/80" },
        { text: "Item B", imgSrc: "https://via.placeholder.com/80" },
        { text: "Item C", imgSrc: "https://via.placeholder.com/80" },
    ];

    const renderList = (list) => {
        return list.map((item, index) => (
            <div key={index} style={styles.flexboxItem}>
                <img src={item.imgSrc} alt={item.text} style={styles.image} />
                <p>{item.text}</p>
            </div>
        ));
    };

    return (
        <div>
            <TopBanner />
            <div style={styles.leftColumn}></div> {/* Left column */}
            <div style={styles.rightColumn}></div> {/* Right column */}
            <div style={styles.content}>
                <div style={styles.buttonContainer}>
                    <button
                        style={{
                            ...styles.button,
                            ...(activeList === "list1" ? styles.activeButton : {}),
                        }}
                        onClick={() => setActiveList("list1")}
                    >
                        List 1
                    </button>
                    <button
                        style={{
                            ...styles.button,
                            ...(activeList === "list2" ? styles.activeButton : {}),
                        }}
                        onClick={() => setActiveList("list2")}
                    >
                        List 2
                    </button>
                </div>
                <div style={styles.flexboxContainer}>
                    {activeList === "list1" ? renderList(list1) : renderList(list2)}
                </div>
            </div>
        </div>
    );
};

export default BattleMenu;
