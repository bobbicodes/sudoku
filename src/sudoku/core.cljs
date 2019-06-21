(ns ^:figwheel-hooks sudoku.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

(println "This text is printed from src/sudoku/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))

(def grid-size 9)

(defn positions []
  (for [i (range grid-size)
        j (range grid-size)]
    [j i]))

(def partial-puzzle
  [[9 1 0 2 3 8 4 5 6]
   [2 4 3 5 0 6 7 8 9]
   [5 6 8 0 7 9 1 2 3]
   [1 2 4 3 5 7 0 9 8]
   [3 5 6 8 9 1 2 0 7]
   [7 8 9 6 2 4 3 1 5]
   [4 3 1 7 8 5 9 6 2]
   [6 7 5 0 4 2 8 3 1]
   [8 9 2 1 6 3 5 7 4]])

(def puzzle [0 0 4 3 0 0 2 0 9 0 0 5 0 0 9 0 0 1 0 7 0 0 6 0 0 4 3 0 0 6 0 0 2 0 8 7 1 9 0 0 0 7 4 0 0 0 5 0 0 8 3 0 0 0 6 0 0 0 0 0 1 0 5 0 0 3 5 0 8 6 9 0 0 4 2 9 1 0 3 0 0])
(def answer [8 6 4 3 7 1 2 5 9 3 2 5 8 4 9 7 6 1 9 7 1 2 6 5 8 4 3 4 3 6 1 9 2 5 8 7 1 9 8 6 5 7 4 3 2 2 5 7 4 8 3 9 1 6 6 8 9 7 3 4 1 2 5 7 1 3 5 2 8 6 9 4 5 4 2 9 1 6 3 7 8])
(defn init-matrix []
  (into {}
        (map vector
             (positions)
             (flatten puzzle))))

(def board (atom (init-matrix)))

(def cell-input (atom nil))

(def val-input (atom nil))

(defn rect-cell [[x y]]
  [:rect.cell
   {:x (+ 0.05 x) :width 0.9
    :y (+ 0.05 y) :height 0.9
    :fill "white"
    :stroke-width 0.025
    :stroke "black"
    :on-click
    (fn click-square [e]
      (reset! cell-input [x y]))}])

(defn text-cell [app-state [x y]]
  [:text
   {:x (+ 0.5 x) :width 1
    :y (+ 0.72 y) :height 1
    :text-anchor "middle"
    :font-size 0.6}
   (if (< 0 (get app-state [x y]))
     (get app-state [x y]))])

(defn render-board [app-state]
  (into
   [:svg.board
    {:view-box (str "0 0 " grid-size " " grid-size)
     :shape-rendering "auto"
     :style {:max-height "500px"}}]
   (for [[pos condition] app-state]
     [:g
      [rect-cell pos]
      [text-cell app-state pos]])))

(defn input-field []
  (fn []
    [:div
     [:p "Enter value: "
      [:input {:type "number"
               :value (get @cell-input @board)
               :on-change #(swap! board assoc @cell-input (js/parseInt (-> % .-target .-value)))}]]]))

(defn attempt [state]
  (into [] (for [i (range grid-size)
                 j (range grid-size)]
             (get state [j i]))))

(defn win? [state]
  (= answer
     (attempt state)))

(defn sudoku []
  [:center
   [:p (str "Enter for cell " @cell-input)]
   [input-field]
   [:div [render-board @board]]
   [:p (str "Win? = " (win? @board))]
   [:p (str "Because " (attempt @board) (if (win? @board)
                                          " equals "
                                          " does not equal ") answer)]])

;; define your app data so that it doesn't get over-written on reload

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (reagent/render-component [sudoku] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
