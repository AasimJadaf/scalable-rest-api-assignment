

// import { useEffect, useState } from "react";
// import API from "../api";

// const styles = {
//   page: {
//     minHeight: "100vh",
//     background: "#f5f5f3",
//     display: "flex",
//     justifyContent: "center",
//     padding: "2rem 1rem",
//     fontFamily: "system-ui, -apple-system, sans-serif",
//   },
//   shell: { width: "100%", maxWidth: "480px" },
//   header: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: "1.5rem",
//   },
//   h1: { fontSize: "20px", fontWeight: 500, color: "#111", margin: 0 },
//   logoutBtn: {
//     fontSize: "12px",
//     padding: "5px 12px",
//     border: "0.5px solid #d0cec8",
//     borderRadius: "8px",
//     background: "transparent",
//     color: "#888",
//     cursor: "pointer",
//   },
//   statsGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gap: "10px",
//     marginBottom: "1.5rem",
//   },
//   statCard: { background: "#ebebea", borderRadius: "8px", padding: "12px 14px" },
//   statVal: { fontSize: "22px", fontWeight: 500, color: "#111" },
//   statLabel: {
//     fontSize: "11px",
//     color: "#aaa",
//     marginTop: "2px",
//     textTransform: "uppercase",
//     letterSpacing: ".04em",
//   },
//   inputRow: { display: "flex", gap: "8px", marginBottom: "1rem" },
//   input: {
//     flex: 1,
//     height: "36px",
//     padding: "0 12px",
//     border: "0.5px solid #d0cec8",
//     borderRadius: "8px",
//     background: "#fff",
//     color: "#111",
//     fontSize: "14px",
//     outline: "none",
//   },
//   addBtn: {
//     height: "36px",
//     padding: "0 16px",
//     border: "0.5px solid #d0cec8",
//     borderRadius: "8px",
//     background: "#fff",
//     color: "#111",
//     fontSize: "14px",
//     cursor: "pointer",
//     whiteSpace: "nowrap",
//   },
//   filters: { display: "flex", gap: "6px", marginBottom: "1rem" },
//   filterBtn: (active) => ({
//     fontSize: "12px",
//     padding: "4px 12px",
//     border: "0.5px solid",
//     borderColor: active ? "#888" : "#e0deda",
//     borderRadius: "20px",
//     background: active ? "#fff" : "transparent",
//     color: active ? "#111" : "#888",
//     fontWeight: active ? 500 : 400,
//     cursor: "pointer",
//   }),
//   taskList: { display: "flex", flexDirection: "column", gap: "8px" },
//   taskItem: (completed) => ({
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     background: "#fff",
//     border: "0.5px solid #e8e6e1",
//     borderRadius: "12px",
//     padding: "12px 14px",
//     opacity: completed ? 0.6 : 1,
//   }),
//   checkBox: (checked) => ({
//     width: "18px",
//     height: "18px",
//     border: `1.5px solid ${checked ? "#2d9e6b" : "#ccc"}`,
//     borderRadius: "4px",
//     cursor: "pointer",
//     flexShrink: 0,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     background: checked ? "#e6f5ee" : "transparent",
//   }),
//   taskTitle: (completed) => ({
//     flex: 1,
//     fontSize: "14px",
//     color: completed ? "#aaa" : "#111",
//     textDecoration: completed ? "line-through" : "none",
//   }),
//   taskTime: { fontSize: "11px", color: "#bbb", flexShrink: 0 },
//   delBtn: {
//     width: "24px",
//     height: "24px",
//     border: "none",
//     background: "transparent",
//     color: "#ccc",
//     cursor: "pointer",
//     borderRadius: "4px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "18px",
//     flexShrink: 0,
//   },
//   empty: { textAlign: "center", padding: "2.5rem 1rem", color: "#bbb", fontSize: "14px" },
// };

// function timeAgo(dateStr) {
//   const h = Math.round((Date.now() - new Date(dateStr)) / 3600000);
//   if (h < 1) return "just now";
//   if (h < 24) return `${h}h ago`;
//   return `${Math.floor(h / 24)}d ago`;
// }

// export default function Dashboard() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [filter, setFilter] = useState("all");
//   const [hoveredId, setHoveredId] = useState(null);

//   const fetchTasks = async () => {
//     const res = await API.get("/tasks");
//     setTasks(res.data);
//   };

//   const addTask = async () => {
//     const trimmed = title.trim();
//     if (!trimmed) return;
//     await API.post("/tasks", { title: trimmed });
//     setTitle("");
//     fetchTasks();
//   };

//   const toggleTask = async (id, completed) => {
//     await API.put(`/tasks/${id}`, { completed: !completed });
//     fetchTasks();
//   };

//   const deleteTask = async (id) => {
//     await API.delete(`/tasks/${id}`);
//     fetchTasks();
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") addTask();
//   };

//   useEffect(() => { fetchTasks(); }, []);

//   const total = tasks.length;
//   const done = tasks.filter((t) => t.completed).length;
//   const pending = total - done;

//   const visible = tasks.filter((t) =>
//     filter === "all" ? true : filter === "done" ? t.completed : !t.completed
//   );

//   return (
//     <div style={styles.page}>
//       <div style={styles.shell}>

//         <div style={styles.header}>
//           <h1 style={styles.h1}>My Tasks</h1>
//           <button
//             style={styles.logoutBtn}
//             onClick={() => { localStorage.removeItem("token"); window.location.href = "/"; }}
//           >
//             Sign out
//           </button>
//         </div>

//         <div style={styles.statsGrid}>
//           {[["Total", total], ["Done", done], ["Pending", pending]].map(([label, val]) => (
//             <div key={label} style={styles.statCard}>
//               <div style={styles.statVal}>{val}</div>
//               <div style={styles.statLabel}>{label}</div>
//             </div>
//           ))}
//         </div>

//         <div style={styles.inputRow}>
//           <input
//             style={styles.input}
//             value={title}
//             placeholder="Add a new task..."
//             onChange={(e) => setTitle(e.target.value)}
//             onKeyDown={handleKeyDown}
//           />
//           <button style={styles.addBtn} onClick={addTask}>+ Add</button>
//         </div>

//         <div style={styles.filters}>
//           {["all", "pending", "done"].map((f) => (
//             <button
//               key={f}
//               style={styles.filterBtn(filter === f)}
//               onClick={() => setFilter(f)}
//             >
//               {f.charAt(0).toUpperCase() + f.slice(1)}
//             </button>
//           ))}
//         </div>

//         <div style={styles.taskList}>
//           {visible.length === 0 ? (
//             <div style={styles.empty}>No tasks here</div>
//           ) : (
//             visible.map((t) => (
//               <div
//                 key={t._id}
//                 style={styles.taskItem(t.completed)}
//                 onMouseEnter={() => setHoveredId(t._id)}
//                 onMouseLeave={() => setHoveredId(null)}
//               >
//                 <div
//                   style={styles.checkBox(t.completed)}
//                   onClick={() => toggleTask(t._id, t.completed)}
//                 >
//                   {t.completed && (
//                     <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
//                       <path d="M1 4l3 3 5-6" stroke="#2d9e6b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                   )}
//                 </div>
//                 <span style={styles.taskTitle(t.completed)}>{t.title}</span>
//                 {t.createdAt && (
//                   <span style={styles.taskTime}>{timeAgo(t.createdAt)}</span>
//                 )}
//                 <button
//                   style={{
//                     ...styles.delBtn,
//                     opacity: hoveredId === t._id ? 1 : 0,
//                     color: hoveredId === t._id ? "#e24b4a" : "#ccc",
//                   }}
//                   onClick={() => deleteTask(t._id)}
//                   title="Delete task"
//                 >
//                   ×
//                 </button>
//               </div>
//             ))
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import API from "../api";

const css = `
  .dash { background: #fff; border: 0.5px solid #e4e2dc; border-radius: 4px; overflow: hidden; max-width: 820px; margin: 0 auto; }
  .topbar { display: flex; align-items: center; justify-content: space-between; padding: 18px 24px; border-bottom: 0.5px solid #e4e2dc; }
  .brand { display: flex; align-items: center; gap: 10px; }
  .brand-icon { width: 28px; height: 28px; background: #111; border-radius: 4px; display: flex; align-items: center; justify-content: center; }
  .brand-name { font-size: 15px; font-weight: 500; color: #111; }
  .user-row { display: flex; align-items: center; gap: 10px; }
  .avatar { width: 30px; height: 30px; border-radius: 50%; background: #f0eeea; border: 0.5px solid #d0cec8; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 500; color: #666; }
  .logout-btn { font-size: 12px; padding: 5px 12px; border: 0.5px solid #d0cec8; border-radius: 4px; background: transparent; color: #888; cursor: pointer; }
  .logout-btn:hover { background: #fcebeb; color: #a32d2d; border-color: #f09595; }
  .progress-bar { height: 3px; background: #f0eeea; }
  .progress-fill { height: 3px; background: #639922; transition: width 0.3s ease; }
  .body { display: grid; grid-template-columns: 200px 1fr; min-height: 520px; }
  .sidebar { border-right: 0.5px solid #e4e2dc; padding: 20px 0; }
  .sidebar-label { font-size: 10px; letter-spacing: .06em; text-transform: uppercase; color: #bbb; margin-bottom: 8px; padding: 0 20px; }
  .nav-item { display: flex; align-items: center; gap: 8px; padding: 7px 16px; cursor: pointer; font-size: 13px; color: #888; }
  .nav-item:hover { background: #f7f6f3; }
  .nav-item.active { background: #f7f6f3; color: #111; font-weight: 500; }
  .nav-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
  .nav-count { margin-left: auto; font-size: 11px; color: #aaa; background: #f0eeea; border: 0.5px solid #e4e2dc; border-radius: 10px; padding: 1px 7px; }
  .main { display: flex; flex-direction: column; }
  .main-header { padding: 20px 24px 16px; border-bottom: 0.5px solid #e4e2dc; }
  .main-title { font-size: 16px; font-weight: 500; color: #111; margin: 0 0 2px; }
  .main-sub { font-size: 12px; color: #bbb; }
  .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: #e4e2dc; border-bottom: 0.5px solid #e4e2dc; }
  .stat-cell { background: #fff; padding: 14px 20px; }
  .stat-n { font-size: 24px; font-weight: 500; color: #111; line-height: 1; }
  .stat-l { font-size: 11px; color: #bbb; margin-top: 3px; text-transform: uppercase; letter-spacing: .04em; }
  .input-zone { padding: 16px 24px; border-bottom: 0.5px solid #e4e2dc; display: flex; gap: 8px; }
  .task-input { flex: 1; height: 34px; padding: 0 12px; border: 0.5px solid #d0cec8; border-radius: 4px; background: #fff; color: #111; font-size: 13px; outline: none; font-family: inherit; }
  .task-input:focus { border-color: #888; }
  .add-task-btn { height: 34px; padding: 0 16px; border: 0.5px solid #d0cec8; border-radius: 4px; background: #f7f6f3; color: #111; font-size: 13px; cursor: pointer; white-space: nowrap; }
  .add-task-btn:hover { background: #fff; border-color: #888; }
  .mob-filters { display: none; gap: 6px; padding: 12px 24px; border-bottom: 0.5px solid #e4e2dc; }
  .mob-f { font-size: 12px; padding: 4px 12px; border: 0.5px solid #e4e2dc; border-radius: 20px; background: transparent; color: #888; cursor: pointer; }
  .mob-f.active { border-color: #888; color: #111; font-weight: 500; background: #f7f6f3; }
  .task-area { flex: 1; padding: 12px 24px 20px; }
  .task-row { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border: 0.5px solid #e4e2dc; border-radius: 4px; margin-bottom: 7px; background: #fff; }
  .task-row:hover { border-color: #d0cec8; }
  .task-row:hover .del-btn { opacity: 1 !important; }
  .task-row.done-row { opacity: .55; }
  .chk { width: 16px; height: 16px; border: 1.5px solid #d0cec8; border-radius: 3px; flex-shrink: 0; cursor: pointer; display: flex; align-items: center; justify-content: center; }
  .chk.on { background: #EAF3DE; border-color: #639922; }
  .task-text { flex: 1; font-size: 13px; color: #111; }
  .task-row.done-row .task-text { text-decoration: line-through; color: #bbb; }
  .task-badge { font-size: 10px; padding: 2px 8px; border-radius: 3px; font-weight: 500; flex-shrink: 0; }
  .badge-pending { background: #FAEEDA; color: #854F0B; }
  .badge-done { background: #EAF3DE; color: #3B6D11; }
  .task-time { font-size: 11px; color: #bbb; flex-shrink: 0; min-width: 44px; text-align: right; }
  .del-btn { width: 22px; height: 22px; border: none; background: transparent; color: #ccc; cursor: pointer; border-radius: 3px; font-size: 18px; display: flex; align-items: center; justify-content: center; opacity: 0; flex-shrink: 0; }
  .del-btn:hover { color: #a32d2d; background: #fcebeb; }
  .empty { padding: 2rem; text-align: center; color: #bbb; font-size: 13px; }
  @media (max-width: 580px) {
    .body { grid-template-columns: 1fr; }
    .sidebar { display: none; }
    .mob-filters { display: flex !important; }
    .dash { border-radius: 0; border-left: none; border-right: none; }
  }
`;

function timeAgo(dateStr) {
  const h = Math.round((Date.now() - new Date(dateStr)) / 3600000);
  if (h < 1) return "just now";
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    await API.post("/tasks", { title: trimmed });
    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (id, completed) => {
    await API.put(`/tasks/${id}`, { completed: !completed });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => { fetchTasks(); }, []);

  const total = tasks.length;
  const done = tasks.filter((t) => t.completed).length;
  const pending = total - done;
  const pct = total ? Math.round((done / total) * 100) : 0;

  const visible = tasks.filter((t) =>
    filter === "all" ? true : filter === "done" ? t.completed : !t.completed
  );

  const viewTitles = { all: "All tasks", pending: "Pending tasks", done: "Completed tasks" };
  const viewSubs = { all: `${total} tasks total`, pending: `${pending} remaining`, done: `${done} completed` };

  return (
    <>
      <style>{css}</style>
      <div style={{ background: "#f5f5f3", minHeight: "100vh", padding: "1.5rem 1rem", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <div className="dash">

          <div className="topbar">
            <div className="brand">
              <div className="brand-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="5" height="5" rx="1" fill="white" />
                  <rect x="8" y="1" width="5" height="5" rx="1" fill="white" />
                  <rect x="1" y="8" width="5" height="5" rx="1" fill="white" />
                  <rect x="8" y="8" width="5" height="5" rx="1" fill="white" />
                </svg>
              </div>
              <span className="brand-name">TaskBoard</span>
            </div>
            <div className="user-row">
              <div className="avatar">JD</div>
              <button className="logout-btn" onClick={() => { localStorage.removeItem("token"); window.location.href = "/"; }}>
                Sign out
              </button>
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>

          <div className="body">
            <div className="sidebar">
              <div className="sidebar-label">Views</div>
              {[
                { f: "all", dot: "#888", label: "All tasks", count: total },
                { f: "pending", dot: "#EF9F27", label: "Pending", count: pending },
                { f: "done", dot: "#639922", label: "Completed", count: done },
              ].map(({ f, dot, label, count }) => (
                <div key={f} className={`nav-item${filter === f ? " active" : ""}`} onClick={() => setFilter(f)}>
                  <span className="nav-dot" style={{ background: dot }} />
                  {label}
                  <span className="nav-count">{count}</span>
                </div>
              ))}
            </div>

            <div className="main">
              <div className="main-header">
                <p className="main-title">{viewTitles[filter]}</p>
                <p className="main-sub">{viewSubs[filter]}</p>
              </div>

              <div className="stats-row">
                {[["Total", total], ["Done", done], ["Pending", pending]].map(([l, v]) => (
                  <div className="stat-cell" key={l}>
                    <div className="stat-n">{v}</div>
                    <div className="stat-l">{l}</div>
                  </div>
                ))}
              </div>

              <div className="input-zone">
                <input
                  className="task-input"
                  value={title}
                  placeholder="Add a new task and press Enter..."
                  onChange={(e) => setTitle(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTask()}
                />
                <button className="add-task-btn" onClick={addTask}>+ Add</button>
              </div>

              <div className="mob-filters">
                {["all", "pending", "done"].map((f) => (
                  <button key={f} className={`mob-f${filter === f ? " active" : ""}`} onClick={() => setFilter(f)}>
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>

              <div className="task-area">
                {visible.length === 0 ? (
                  <div className="empty">No tasks here</div>
                ) : (
                  visible.map((t) => (
                    <div key={t._id} className={`task-row${t.completed ? " done-row" : ""}`}>
                      <div className={`chk${t.completed ? " on" : ""}`} onClick={() => toggleTask(t._id, t.completed)}>
                        {t.completed && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4l3 3 5-6" stroke="#3B6D11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span className="task-text">{t.title}</span>
                      <span className={`task-badge ${t.completed ? "badge-done" : "badge-pending"}`}>
                        {t.completed ? "Done" : "Pending"}
                      </span>
                      {t.createdAt && <span className="task-time">{timeAgo(t.createdAt)}</span>}
                      <button className="del-btn" style={{ opacity: 0 }} onClick={() => deleteTask(t._id)}>×</button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}